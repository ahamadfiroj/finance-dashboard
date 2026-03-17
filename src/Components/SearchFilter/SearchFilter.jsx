import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { SearchFilterWrapper } from "./SearchFilter.style";
import {
  setDateRange,
  setSearchText,
  setSelectedProject,
  setSelectedStatus,
} from "../../store/redux/SearchFilter/action";

const selectStyles = {
  control: (base) => ({
    ...base,
    minHeight: 46,
    borderRadius: 14,
    borderColor: "rgba(30, 61, 112, 0.14)",
    boxShadow: "none",
  }),
  menu: (base) => ({
    ...base,
    borderRadius: 14,
    overflow: "hidden",
    zIndex: 20,
  }),
  placeholder: (base) => ({
    ...base,
    color: "#6f7f95",
  }),
};

const SearchFilter = ({
  title,
  subtitle,
  projectOptions,
  statusOptions,
  onExport,
}) => {
  const { selectedProject, dateRange, selectedStatus, searchText } =
    useSelector((state) => state.searchFilter);
  const dispatch = useDispatch();
  const selectedProjectOption =
    projectOptions.find((option) => option.value === selectedProject) ?? null;
  const selectedStatusOption =
    statusOptions.find((option) => option.value === selectedStatus) ?? null;

  return (
    <SearchFilterWrapper>
      <div className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Portfolio finance</span>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <button type="button" onClick={onExport} className="export-btn">
          Export
        </button>
      </div>

      <div className="filter-grid">
        <label className="select-field">
          <span className="label">Project</span>
          <Select
            value={selectedProjectOption}
            onChange={(option) =>
              dispatch(setSelectedProject(option?.value ?? "all"))
            }
            options={projectOptions}
            styles={selectStyles}
            isSearchable={false}
          />
        </label>

        <label className="date-field">
          <span className="label">Start date</span>
          <DatePicker
            selected={dateRange.start ? new Date(dateRange.start) : null}
            onChange={(date) =>
              dispatch(
                setDateRange({
                  ...dateRange,
                  start: date ? date.toISOString().slice(0, 10) : "",
                }),
              )
            }
            placeholderText="Select start date"
            dateFormat="dd MMM yyyy"
            isClearable
          />
        </label>

        <label className="date-field">
          <span className="label">End date</span>
          <DatePicker
            selected={dateRange.end ? new Date(dateRange.end) : null}
            onChange={(date) =>
              dispatch(
                setDateRange({
                  ...dateRange,
                  end: date ? date.toISOString().slice(0, 10) : "",
                }),
              )
            }
            placeholderText="Select end date"
            dateFormat="dd MMM yyyy"
            isClearable
          />
        </label>

        <label className="select-field">
          <span className="label">Status</span>
          <Select
            value={selectedStatusOption}
            onChange={(option) =>
              dispatch(setSelectedStatus(option?.value ?? "all"))
            }
            options={statusOptions}
            styles={selectStyles}
            isSearchable={false}
          />
        </label>

        <label className="search-field">
          <span className="label">Search</span>
          <input
            type="search"
            value={searchText}
            onChange={(event) => dispatch(setSearchText(event.target.value))}
            placeholder="Invoice, client, or project"
          />
        </label>
      </div>
    </SearchFilterWrapper>
  );
};

export default SearchFilter;
