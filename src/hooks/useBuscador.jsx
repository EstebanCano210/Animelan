import { useState } from 'react'

export const usePagination = (initialPage = 1, itemsPerPage = 20) => {
  const [currentPage, setCurrentPage] = useState(initialPage)
  const [searchTerm, setSearchTerm] = useState('')

  const handlePageChange = (page) => {
    setCurrentPage(page)
  };

  const handleSearch = (term) => {
    setSearchTerm(term)
    setCurrentPage(1)
  };

  return {
    currentPage,
    searchTerm,
    itemsPerPage,
    handlePageChange,
    handleSearch,
  };
};
