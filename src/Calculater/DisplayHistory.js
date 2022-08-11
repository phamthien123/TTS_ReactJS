const DisplayHistory = (props) =>{
   const  totals  = props.history;
   const deleteTotal = (id) =>{
     props.deleteTotalInParent(id);
   }
 return (
    <div className="history">
          <h1>Lịch Sử Phép Tính</h1>
        <div className="historyMath">
        {totals.map((total,index) => (
            <div key={index}>
               <div><span>{index + 1}. {total.name} = {total.TotalValueNumber}</span>
               <i className="fa-solid fa-xmark xmark" onClick={() => deleteTotal(total.id)}></i></div>
            </div>
            ))}   
        </div>
      </div>
 )
}

export default DisplayHistory