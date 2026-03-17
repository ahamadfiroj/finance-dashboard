import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DashboardWrapper } from "./Dashboard.style";
import SearchFilter from "../../Components/SearchFilter";
import KPICardsSummary from "../../Components/KPICardsSummary";
import InvoiceTable from "../../Components/InvoiceTable";
import FinanceCharts from "../../Components/FinanceCharts";
import Modal from "../../Components/Modal";
import LoadingState from "../../Components/LoadingState";
import {
  DASHBOARD_META,
  INVOICES,
  PROJECTS,
  STATUS_OPTIONS,
} from "./Dashbard.constant";
import {
  closeInvoiceDrawer,
  setCurrentPage,
  setLoading,
} from "../../store/redux/InvoiceTable/action";
import {
  formatCompactCurrency,
  formatCurrency,
  getMonthKey,
  paginate,
  sortInvoices,
} from "../../Utils/utils";

const PAGE_SIZE = 6;

const Dashboard = () => {
  const dispatch = useDispatch();
  const { selectedProject, dateRange, selectedStatus, searchText } = useSelector(
    (state) => state.searchFilter,
  );
  const { isDrawerOpen, selectedInvoice, sortConfig, currentPage, isLoading } =
    useSelector((state) => state.invoiceTable);

  useEffect(() => {
    const timer = window.setTimeout(() => dispatch(setLoading(false)), 350);
    return () => window.clearTimeout(timer);
  }, [dispatch]);

  const projectOptions = useMemo(
    () => [
      { value: "all", label: "All projects" },
      ...PROJECTS.map((project) => ({ value: project.id, label: project.name })),
    ],
    [],
  );

  const invoicesWithComputedFields = useMemo(
    () =>
      INVOICES.map((invoice) => ({
        ...invoice,
        outstandingAmount: invoice.invoiceAmount - invoice.receivedAmount,
      })),
    [],
  );

  const filteredInvoices = useMemo(() => {
    const normalizedSearch = searchText.trim().toLowerCase();

    return invoicesWithComputedFields.filter((invoice) => {
      const matchesProject =
        selectedProject === "all" || invoice.projectId === selectedProject;
      const matchesStatus =
        selectedStatus === "all" || invoice.status === selectedStatus;
      const matchesSearch =
        !normalizedSearch ||
        [invoice.invoiceNo, invoice.clientName, invoice.projectName]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch);
      const matchesStart = !dateRange.start || invoice.invoiceDate >= dateRange.start;
      const matchesEnd = !dateRange.end || invoice.invoiceDate <= dateRange.end;

      return (
        matchesProject &&
        matchesStatus &&
        matchesSearch &&
        matchesStart &&
        matchesEnd
      );
    });
  }, [
    dateRange.end,
    dateRange.start,
    invoicesWithComputedFields,
    searchText,
    selectedProject,
    selectedStatus,
  ]);

  const sortedInvoices = useMemo(
    () => sortInvoices(filteredInvoices, sortConfig),
    [filteredInvoices, sortConfig],
  );

  const totalPages = Math.max(1, Math.ceil(sortedInvoices.length / PAGE_SIZE));

  useEffect(() => {
    if (currentPage > totalPages) {
      dispatch(setCurrentPage(totalPages));
    }
  }, [currentPage, dispatch, totalPages]);

  const paginatedInvoices = useMemo(
    () => paginate(sortedInvoices, currentPage, PAGE_SIZE),
    [currentPage, sortedInvoices],
  );

  const kpiCards = useMemo(() => {
    const totalProjectValue = PROJECTS.reduce(
      (sum, project) => sum + project.projectValue,
      0,
    );
    const totalBilledAmount = filteredInvoices.reduce(
      (sum, invoice) => sum + invoice.invoiceAmount,
      0,
    );
    const totalReceivedAmount = filteredInvoices.reduce(
      (sum, invoice) => sum + invoice.receivedAmount,
      0,
    );
    const outstandingAmount = filteredInvoices.reduce(
      (sum, invoice) => sum + invoice.outstandingAmount,
      0,
    );
    const thisMonthBilling = filteredInvoices
      .filter((invoice) => invoice.invoiceDate.startsWith("2026-03"))
      .reduce((sum, invoice) => sum + invoice.invoiceAmount, 0);
    const overduePayments = filteredInvoices
      .filter((invoice) => invoice.status === "Overdue")
      .reduce((sum, invoice) => sum + invoice.outstandingAmount, 0);
    const vendorPayables = PROJECTS.reduce(
      (sum, project) => sum + project.vendorPayables,
      0,
    );
    const budgetVariance = PROJECTS.reduce(
      (sum, project) => sum + (project.actual - project.budget),
      0,
    );

    return [
      {
        id: "total-project-value",
        eyebrow: "Portfolio",
        title: "Total Project Value",
        value: formatCompactCurrency(totalProjectValue),
        change: `${PROJECTS.length} active projects`,
        tone: "neutral",
      },
      {
        id: "total-billed",
        eyebrow: "Billing",
        title: "Total Billed Amount",
        value: formatCompactCurrency(totalBilledAmount),
        change: `${filteredInvoices.length} invoices`,
        tone: "positive",
      },
      {
        id: "total-received",
        eyebrow: "Collections",
        title: "Total Received Amount",
        value: formatCompactCurrency(totalReceivedAmount),
        change: totalBilledAmount
          ? `${Math.round((totalReceivedAmount / totalBilledAmount) * 100)}% realization`
          : "0% realization",
        tone: "positive",
      },
      {
        id: "outstanding",
        eyebrow: "Exposure",
        title: "Outstanding Amount",
        value: formatCompactCurrency(outstandingAmount),
        change: "Open receivables",
        tone: outstandingAmount > 1800000 ? "danger" : "warning",
      },
      {
        id: "this-month-billing",
        eyebrow: "Current month",
        title: "This Month Billing",
        value: formatCompactCurrency(thisMonthBilling),
        change: "March 2026",
        tone: "neutral",
      },
      {
        id: "overdue-payments",
        eyebrow: "Collections risk",
        title: "Overdue Payments",
        value: formatCompactCurrency(overduePayments),
        change: `${filteredInvoices.filter((invoice) => invoice.status === "Overdue").length} overdue invoices`,
        tone: "danger",
      },
      {
        id: "vendor-payables",
        eyebrow: "Liabilities",
        title: "Vendor Payables",
        value: formatCompactCurrency(vendorPayables),
        change: "Across delivery partners",
        tone: "warning",
      },
      {
        id: "variance",
        eyebrow: "Budget control",
        title: "Budget vs Actual Variance",
        value: formatCurrency(budgetVariance),
        change: budgetVariance > 0 ? "Over budget" : "Under budget",
        tone: budgetVariance > 0 ? "danger" : "positive",
      },
    ];
  }, [filteredInvoices]);

  const trendData = useMemo(() => {
    const monthMap = new Map();

    filteredInvoices.forEach((invoice) => {
      const month = getMonthKey(invoice.invoiceDate);
      const existing = monthMap.get(month) || { month, billed: 0, received: 0 };
      existing.billed += invoice.invoiceAmount;
      existing.received += invoice.receivedAmount;
      monthMap.set(month, existing);
    });

    return Array.from(monthMap.values()).slice(-6);
  }, [filteredInvoices]);

  const outstandingByProject = useMemo(() => {
    return PROJECTS.map((project) => {
      const value = filteredInvoices
        .filter((invoice) => invoice.projectId === project.id)
        .reduce((sum, invoice) => sum + invoice.outstandingAmount, 0);

      return {
        projectId: project.id,
        projectName: project.name,
        value,
      };
    })
      .filter((project) => project.value > 0)
      .sort((first, second) => second.value - first.value);
  }, [filteredInvoices]);

  const handleExport = () => {
    const header = [
      "Invoice No",
      "Project Name",
      "Client Name",
      "Invoice Date",
      "Due Date",
      "Invoice Amount",
      "Received Amount",
      "Outstanding Amount",
      "Status",
    ];
    const rows = sortedInvoices.map((invoice) => [
      invoice.invoiceNo,
      invoice.projectName,
      invoice.clientName,
      invoice.invoiceDate,
      invoice.dueDate,
      invoice.invoiceAmount,
      invoice.receivedAmount,
      invoice.outstandingAmount,
      invoice.status,
    ]);
    const csvContent = [header, ...rows]
      .map((row) => row.map((value) => `"${value}"`).join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "finance-dashboard-export.csv";
    link.click();
    window.URL.revokeObjectURL(url);
  };

  if (isLoading) {
    return (
      <DashboardWrapper>
        <LoadingState />
      </DashboardWrapper>
    );
  }

  return (
    <DashboardWrapper>
      <SearchFilter
        title={DASHBOARD_META.title}
        subtitle={DASHBOARD_META.subtitle}
        projectOptions={projectOptions}
        statusOptions={STATUS_OPTIONS}
        onExport={handleExport}
      />
      <KPICardsSummary cards={kpiCards} />
      <FinanceCharts
        trendData={trendData}
        outstandingByProject={outstandingByProject}
      />
      <InvoiceTable
        invoices={paginatedInvoices}
        totalItems={sortedInvoices.length}
        totalPages={totalPages}
      />
      <Modal
        invoice={selectedInvoice}
        isOpen={isDrawerOpen}
        onClose={() => dispatch(closeInvoiceDrawer())}
      />
    </DashboardWrapper>
  );
};

export default Dashboard;
