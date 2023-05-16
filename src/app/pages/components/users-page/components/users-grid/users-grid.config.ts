export const USERS_GRID_OPTIONS = {
  rowBuffer: 10,
  animateRows: false,
  debounceVerticalScrollbar: true,
  headerHeight: 60,
  defaultColDef: {
    sortable: true,
    filter: true,
    suppressSizeToFit: true,
    floatingFilter: true,
  },
  paginationPageSize: 10,
};

export const USERS_GRID_COLUMN_DEFS = (handleLoginClick, handleIsFavoriteChange) => ([
  {
    field: 'login',
    colId: 'login',
    resizable: true,
    cellRenderer: function(params: any) {
      return '<a>'+ params.value+'</a>'
    },
    cellClass: ['cursor-pointer', 'cell-link'],
    onCellClicked: ({ data }) => handleLoginClick(data),
  },
  {
    field: 'id',
    resizable: true,
  },
  {
    field: 'url',
    width: 400,
    resizable: true
  },
  {
    field: 'type',
    resizable: true,
  },
  {
    field: 'score',
    resizable: true,
  },
  {
    field: 'isFavorite',
    id: 'isFavorite',
    resizable: true,
    width: 350,
    cellRenderer: ({ data }: any) => {
      const isFavorite = data?.isFavorite;

      return `<mat-icon class="mat-icon material-icons mat-icon-no-color" role="img" aria-hidden="true">
        ${isFavorite ? 'favorite' : 'favorite_border'}
      </mat-icon>`;
    },
    cellClass: 'app-users-grid__icon',
    onCellClicked: ({ data }) => handleIsFavoriteChange(data),
  }
]);
