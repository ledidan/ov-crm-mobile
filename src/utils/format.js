/**
 * Formats a number as Vietnamese Dong (VND) currency.
 * @param {number | null | undefined} value The number to format.
 * @returns {string} The formatted currency string (e.g., "200.640 ₫").
 */
export const formatCurrency = (value) => {
  if (typeof value !== 'number' || isNaN(value)) {
    return '0 ₫';
  }

  // Using Intl.NumberFormat for robust, locale-aware currency formatting.
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
};