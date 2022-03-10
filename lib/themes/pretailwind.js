//prettier-ignore
module.exports = function () {
	return {
		framework: 'tailwind',
		table: 'tw-table-auto',
		tbody: '',
		th: 'tw-border tw-px-4 tw-py-2',
		td: 'tw-border tw-px-4 tw-py-2',
		tr: '',
		trEven: 'tw-bg-slate-100',
		trOdd: '',
		row: 'tw-grid-rows-1',
		column: 'tw-flex',
		label: 'label',
		input: 'tw-p-1 tw-border',
		select: 'tw-p-1 tw-border',
		field: 'tw-flex-initial tw-m-2',
		inline: 'is-horizontal',
		right: 'is-pulled-right',
		left: 'is-pulled-left',
		center: 'tw-text-center',
		contentCenter: 'is-centered',
		icon: 'icon',
		small: 'is-small',
		nomargin: 'marginless',
		button: 'button',
		groupTr: 'is-selected',
		dropdown: {
			container: 'dropdown tw-flex-initial tw-m-2 tw-relative',
			trigger: 'dropdown-trigger tw-border tw-rounded tw-p-1',
			menu: 'dropdown-menu tw-absolute tw-z-50 tw-bg-white tw-border tw-p-2',
			content: 'dropdown-content tw-truncate tw-flex-1',
			item: 'dropdown-item tw-mb-1 tw-flex',
			caret: 'fa fa-angle-down',
			checkbox: 'tw-mt-1',
			text: 'tw-text-left tw-ml-1',
		},
		pagination: {
			nav: 'tw-mt-1 tw-text-center',
			count: 'tw-text-center',
			wrapper: 'pagination',
			list: 'tw-flex',
			item: 'tw-m-1 tw-border tw-rounded',
			link: 'tw-block tw-w-7 tw-p-2',
			next: '',
			prev: '',
			active: 'tw-bg-sky-500 tw-text-white',
			disabled: 'tw-text-slate-400',
		},
	};
};