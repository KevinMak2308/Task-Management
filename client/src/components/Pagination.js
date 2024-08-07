import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  //Genererer en liste over sidetal baseret på det totale antal sider  
  const paginationNumbers = [];

  //Itererer fra 1 til totalPages for at oprette en liste over alle sider
  for (let i = 1; i <= totalPages; i++) {
    //Tilføjer det aktuelle sidetal til listen ved brug af push funktionen
    paginationNumbers.push(i);
  }

  //Funktion til at håndtere klik på "Prev" knappen
  const handlePrevious = () => {
    //Tjekker om der findes en forrige side, og trækker 1 fra det aktuelle sidetal, hvis der er
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  //Funktion til at håndtere klik på "Next" knappen
  const handleNext = () => {
    //Tjekker om der findes en næste side, og lægger 1 til det aktuelle sidetal, hvis der er
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className='pagination'>
      {/* Knap til at gå til forrige side */}
      <button 
        onClick={handlePrevious}
        disabled={currentPage === 1}  //Deaktiverer knappen hvis der ikke er nogen forrige side
        style={{
          cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
          margin: '0 5px',
          padding: '5px 10px'
        }}
      >
        &lt; Prev
      </button>

      {/* Knapper til at vælge en specifik side */}
      {paginationNumbers.map((pageNumber) => (
        <button 
          key={pageNumber} 
          onClick={() => onPageChange(pageNumber)}  //Kalder onPageChange for at ændre til den valgte side
          style={{ 
            fontWeight: pageNumber === currentPage ? 'bold' : 'normal', 
            cursor: 'pointer',
            margin: '0 5px',
            padding: '5px 10px'
          }}
          disabled={pageNumber === currentPage}  //Deaktiverer knappen hvis man er på siden
        >
          {pageNumber}
        </button>
      ))}

      {/* Knap til at gå til næste side */}
      <button 
        onClick={handleNext}
        disabled={currentPage === totalPages}  //Deaktiverer knappen hvis der ikke er nogen næste side
        style={{
          cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
          margin: '0 5px',
          padding: '5px 10px'
        }}
      >
        Next &gt;
      </button>
    </div>
  );
};

export default Pagination;