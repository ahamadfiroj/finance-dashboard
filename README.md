# Finance Dashboard

Frontend assignment implementation for a finance dashboard focused on project status, invoicing, collections, outstanding amounts, and trend visibility.

## Setup

1. Install dependencies:
   `npm install`
2. Start the app:
   `npm run dev`
3. Create a production build:
   `npm run build`
4. Run lint:
   `npm run lint`

## Tech Stack

- React + Vite
- Redux for UI state
- styled-components for styling
- react-select for dropdowns
- react-datepicker for date range inputs
- react-google-charts for charts
- Local mock JSON-style data

## Assumptions

- Mock finance data is acceptable for this assignment.
- Currency is shown in INR format.
- Filters apply to KPI cards, charts, export, and table results.
- Date filtering is based on invoice date.
- The dashboard is optimized for desktop and tablet layouts.

## Component Structure

- `src/Pages/Dashboard`
  Main page orchestration, derived dashboard data, export logic.
- `src/Components/SearchFilter`
  Header, filters, search, export action.
- `src/Components/KPICardsSummary` and `src/Components/KPICard`
  Reusable KPI summary card layout.
- `src/Components/FinanceCharts`
  Billed vs received and project outstanding charts.
- `src/Components/InvoiceTable`
  Sortable, paginated invoice table with row click handling.
- `src/Components/Modal`
  Invoice detail drawer.
- `src/store/redux`
  Filter state, sort state, drawer state, loading state.
