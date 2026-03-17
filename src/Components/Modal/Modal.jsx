import { useEffect } from "react";
import { ModalWrapper } from "./Modal.style";
import { DRAWER_FIELD_LABELS } from "../../Pages/Dashboard/Dashbard.constant";
import { formatCurrency, formatDate } from "../../Utils/utils";
import StatusBadge from "../StatusBadge";

const Modal = ({ invoice, isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !invoice) return null;

  const summaryItems = [
    "invoiceNo",
    "clientName",
    "projectName",
    "invoiceDate",
    "dueDate",
    "invoiceAmount",
    "receivedAmount",
    "outstandingAmount",
  ];

  return (
    <ModalWrapper onClick={onClose}>
      <aside className="drawer" onClick={(event) => event.stopPropagation()}>
        <div className="drawer-head">
          <div>
            <span className="eyebrow">Invoice detail</span>
            <h2>{invoice.invoiceNo}</h2>
          </div>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>

        <div className="status-row">
          <StatusBadge status={invoice.status} />
          <p>{invoice.notes}</p>
        </div>

        <div className="summary-grid">
          {summaryItems.map((key) => (
            <div key={key} className="summary-item">
              <span>{DRAWER_FIELD_LABELS[key]}</span>
              <strong>
                {key === "invoiceDate" || key === "dueDate"
                  ? formatDate(invoice[key])
                  : key.includes("Amount")
                    ? formatCurrency(invoice[key])
                    : invoice[key]}
              </strong>
            </div>
          ))}
          <div className="summary-item">
            <span>{DRAWER_FIELD_LABELS.status}</span>
            <strong>{invoice.status}</strong>
          </div>
        </div>

        <section className="section">
          <div className="section-head">
            <h3>Payment schedule</h3>
            <span>{invoice.payments.length} receipt entries</span>
          </div>
          {invoice.payments.length ? (
            <div className="list">
              {invoice.payments.map((payment) => (
                <div key={`${payment.date}-${payment.amount}`} className="list-row">
                  <strong>{formatDate(payment.date)}</strong>
                  <span>{payment.method}</span>
                  <strong>{formatCurrency(payment.amount)}</strong>
                </div>
              ))}
            </div>
          ) : (
            <p className="muted">No payments posted against this invoice yet.</p>
          )}
        </section>

        <section className="section">
          <div className="section-head">
            <h3>Breakdown summary</h3>
            <span>Commercial components</span>
          </div>
          <div className="list">
            {invoice.breakdown.map((item) => (
              <div key={item.label} className="list-row">
                <span>{item.label}</span>
                <strong>{formatCurrency(item.amount)}</strong>
              </div>
            ))}
          </div>
        </section>
      </aside>
    </ModalWrapper>
  );
};

export default Modal;
