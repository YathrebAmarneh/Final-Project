const Invoices = ({ data }) => {

    const invs = data.organization.invoices

    return (
        <div>
            <h5 className="invoiceslabel">Invoices</h5>

            <table>

                <tr className="tablehead">
                    <th>Date & Time</th>
                    <th>PLAN</th>
                    <th>AMOUNT</th>
                    <th>DETAILS</th>
                </tr>

                {invs.map((inv,index) => <tr className="tablebody" key={index}>
                    <td>{inv.date_time}</td>
                    <td>{inv.plan} </td>
                    <td>${inv.amount} </td>
                    <td>Invoice #{inv.invoice_number} <br /><span id="vidown">View | Download</span></td>
                </tr>)}

            </table>
        </div>
    )
}

export default Invoices
