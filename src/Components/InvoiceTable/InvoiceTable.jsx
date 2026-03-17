import { useDispatch, useSelector } from "react-redux";
import { TABLE_COLUMNS } from "../../Pages/Dashboard/Dashbard.constant";
import { formatCurrency, formatDate } from "../../Utils/utils";
import { InvoiceTableWrapper } from "./InvoiceTable.style";
import {
  openInvoiceDrawer,
  setCurrentPage,
  setSortConfig,
} from "../../store/redux/InvoiceTable/action";
import StatusBadge from "../StatusBadge";
import EmptyState from "../EmptyState";

const InvoiceTable = ({ invoices, totalItems, totalPages }) => {
  const dispatch = useDispatch();
  const { sortConfig, currentPage } = useSelector((state) => state.invoiceTable);

  const handleSort = (columnId) => {
    if (!TABLE_COLUMNS.find((column) => column.id === columnId)?.sortable) return;

    const nextDirection =
      sortConfig.key === columnId && sortConfig.direction === "asc" ? "desc" : "asc";

    dispatch(setSortConfig({ key: columnId, direction: nextDirection }));
  };

  const renderCell = (row, columnId) => {
    if (columnId === "status") {
      return <StatusBadge status={row.status} />;
    }

    if (
      columnId === "invoiceAmount" ||
      columnId === "receivedAmount" ||
      columnId === "outstandingAmount"
    ) {
      return formatCurrency(row[columnId]);
    }

    if (columnId === "invoiceDate" || columnId === "dueDate") {
      return formatDate(row[columnId]);
    }

    return row[columnId];
  };

  return (
    <InvoiceTableWrapper>
      <div className="table-header">
        <div>
          <span className="eyebrow">Invoices</span>
          <h2>Billing and collection progress</h2>
        </div>
        <p>{totalItems} invoices in current result set</p>
      </div>

      {invoices.length ? (
        <>
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  {TABLE_COLUMNS.map((column) => {
                    const isActive = sortConfig.key === column.id;
                    const arrow = isActive
                      ? sortConfig.direction === "asc"
                        ? "↑"
                        : "↓"
                      : "";

                    return (
                      <th key={column.id}>
                        <button type="button" onClick={() => handleSort(column.id)}>
                          {column.label} {arrow}
                        </button>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {invoices.map((row) => (
                  <tr
                    key={row.id}
                    onClick={() => dispatch(openInvoiceDrawer(row))}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        dispatch(openInvoiceDrawer(row));
                      }
                    }}
                  >
                    {TABLE_COLUMNS.map((column) => (
                      <td key={column.id}>{renderCell(row, column.id)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pagination">
            <button
              type="button"
              onClick={() => dispatch(setCurrentPage(Math.max(currentPage - 1, 1)))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              type="button"
              onClick={() =>
                dispatch(setCurrentPage(Math.min(currentPage + 1, totalPages)))
              }
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <EmptyState
          title="No invoices match these filters"
          description="Try changing the project, status, date window, or search term."
        />
      )}
    </InvoiceTableWrapper>
  );
};

export default InvoiceTable;
