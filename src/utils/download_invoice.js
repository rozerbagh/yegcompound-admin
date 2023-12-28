import jsPDF from "jspdf";
import {
  logo,
  // userdetails,
  orderHeader,
  // clientDetails,
  orderTableHead,
  orderTableBody,
  orderSubTotal,
} from "./orderPDF";
export function createHtmlFromJSON(jsonData) {
  // console.log(jsonData);
  const _logo = logo(jsonData);
  // const _userdetails = userdetails(jsonData);
  let dateofinvoice = new Date(jsonData.createdAt);
  dateofinvoice = `${dateofinvoice.getDate()}/${
    dateofinvoice.getMonth() + 1
  }/${dateofinvoice.getFullYear()}`;
  const _orderHeader = orderHeader({
    ...jsonData,
    dateofinvoice: dateofinvoice,
  });
  // const _clientDetails = clientDetails(jsonData);
  const _orderTableHead = orderTableHead(jsonData);
  let _orderTableBody = "";
  jsonData?.ingredients.map(
    (ele, idx) => (_orderTableBody += orderTableBody({ index: idx, ...ele }))
  );
  const _orderSubTotal = orderSubTotal(jsonData);

  let html = `<table
      class="nl-container"
      width="200px"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="mso-table-lspace: 0; mso-table-rspace: 0; background-color: #fff"
    >
      <tbody>
        <tr>
          <td>`;

  html += _logo;
  // html += _userdetails;
  html += _orderHeader;
  // html += _clientDetails;
  html += _orderTableHead;
  html += _orderTableBody;
  html += _orderSubTotal;

  html += `</td>
        </tr>
      </tbody>
    </table>`;

  return html;
}
export async function generatePDF(jsonData) {
  if (jsonData) {
    const doc = new jsPDF({
      orientation: "portrait", // or 'landscape'
      unit: "mm", // measurement unit: mm, cm, in, px
      format: "a4", // page size: a0 - a10, letter, legal, ledger, tabloid
    });
    const jsonDataToTable = createHtmlFromJSON(jsonData);

    // Convert HTML string to element to be used in jsPDF
    const element = document.createElement("div");
    element.innerHTML = jsonDataToTable;

    // Add HTML element to PDF
    doc.html(element, {
      callback: function (doc) {
        // Save the PDF after rendering HTML
        doc.save(`INVOICE-${new Date().getTime()}.pdf`);
      },
      x: 7.7,
      y: 10,
      html2canvas: { scale: 0.32 }, // Optional: Adjust scale if needed
      autoPaging: true, // Enable automatic page breaking
    });
  }
}
