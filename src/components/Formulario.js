import React from 'react';

const Formulario = () => {
    return ( 
   <div className="bg-info">
       <div className="container">
           <div className="row">
               <form
                className="col card text-white bg-transparent mb-5 pt-5 pb-2"
               >
                   <fieldset>
                       <legend className="text-center">Buscador Letras Canciones</legend>

                       <div className="row">
                           <div className="col-md-6">1</div>
                           <div className="col-md-6">2</div>
                       </div>
                   </fieldset>

               </form>
           </div>
       </div>
   </div>
    
    );
}
 
export default Formulario;