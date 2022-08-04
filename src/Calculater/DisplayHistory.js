const DisplayHistory = (props) =>{
   const  totals  = props.history;
 return (
    <div className="history">
          <h1>Lịch Sử Phép Tính</h1>
        <div className="historyMath">
        {totals.map((total,index) => (
            <div key={index}>
               <div><span>{total}</span></div>
            </div>
            ))}     
        </div>
        {/* <i className="fa-solid fa-trash-can delete" onClick={deleteTotal}></i>  */}
      </div>
 )
}

export default DisplayHistory