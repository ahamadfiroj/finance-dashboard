export const formatCurrency = (value) => {
  if (value === null || value === undefined) return "-";

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
};

export const formatCompactCurrency = (value) => {
  if (value === null || value === undefined) return "-";

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
};

export const formatDate = (value) => {
  if (!value) return "-";

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
};

export const getMonthKey = (value) =>
  new Intl.DateTimeFormat("en-US", { month: "short" }).format(new Date(value));

export const sortInvoices = (invoices, sortConfig) => {
  const sorted = [...invoices];

  sorted.sort((first, second) => {
    const firstValue = first[sortConfig.key];
    const secondValue = second[sortConfig.key];

    let comparison = 0;

    if (sortConfig.key === "invoiceDate" || sortConfig.key === "dueDate") {
      comparison = new Date(firstValue) - new Date(secondValue);
    } else if (
      sortConfig.key === "invoiceAmount" ||
      sortConfig.key === "receivedAmount" ||
      sortConfig.key === "outstandingAmount"
    ) {
      comparison = firstValue - secondValue;
    } else {
      comparison = String(firstValue).localeCompare(String(secondValue));
    }

    return sortConfig.direction === "asc" ? comparison : comparison * -1;
  });

  return sorted;
};

export const paginate = (items, currentPage, pageSize) => {
  const startIndex = (currentPage - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
};
