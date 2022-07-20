/**
 * @type {Invoice[]}
 */
let invoices = [
  {
    name: 'UIC',
    number: 1995,
    amount: 'Release 0 Build 17',
    due: '1',
  },
  {
    name: 'UVC',
    number: 2000,
    amount: 'UNKNOWN',
    due: '1',
  },
  {
    name: 'HBC',
    number: 2003,
    amount: 'N/A',
    due: '2',
  },
  {
    name: 'PBC',
    number: 1997,
    amount: '1.1.1.1',
    due: '2',
  },
  {
    name: 'NXL-S',
    number: 1998,
    amount: '3.23.45',
    due: '3',
  },
];

export function getInvoices() {
  return invoices;
}

/**
 * @param {number} number
 * @returns {Invoice}
 */
export function getInvoice(number) {
  return invoices.find((invoice) => invoice.number === number);
}

/**
 * @param {number} number
 * @returns {void}
 */
export function deleteInvoice(number) {
  invoices = invoices.filter((invoice) => invoice.number !== number);
}

/**
 * @typedef {{ name: string; number: number; amount: string; due: string }} Invoice
 */
