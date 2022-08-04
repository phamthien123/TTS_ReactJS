const DemoChild = (props) =>{
    const Listtodos = props.child;
    console.log(props)
    return (
            <div>
                  <table className="table text-white mb-0">
                  <tbody>
                      <th>
                        <span className="ms-2">
                          <h2>Số Thứ Tự</h2>
                        </span>
                      </th>
                      <td className="align-middle">
                        <span>
                          <h2>Task List</h2>
                        </span>
                      </td>
                      
                    {Listtodos.map((todo, index) => {
                      return (
                        <tr className="fw-normal">
                          <th>
                            <span className="ms-2">{index + 1}</span>
                          </th>
                          <td className="align-middle">{todo.value}</td>

                          <td className="align-middle">
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
            </div>
    )
}
export default DemoChild