import { PaginationItem } from "./index.styled";

type TablePaginationItemProps = {
  children: JSX.Element;
  disabled: boolean;
  onClick: () => void;
};

export const TablePaginationItem = ({ children, disabled, onClick }: TablePaginationItemProps) => (
  <PaginationItem>
    <button disabled={disabled} onClick={onClick}>
      {children}
    </button>
  </PaginationItem>
);
