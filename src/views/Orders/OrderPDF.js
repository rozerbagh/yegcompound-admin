import companylogo from "../../assets/img/brand/logo.png";
export const logo = (data) => `<table
              class="row row-1"
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="mso-table-lspace: 0; mso-table-rspace: 0"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      class="row-content stack"
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="
                        mso-table-lspace: 0;
                        mso-table-rspace: 0;
                        color: #000;
                        width: 640px;
                        margin: 0 auto;
                      "
                      width="640"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            width="100%"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 20px;
                              padding-top: 20px;
                              vertical-align: top;
                              border-top: 0;
                              border-right: 0;
                              border-bottom: 0;
                              border-left: 0;
                            "
                          >
                            <table
                              class="image_block block-1"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="mso-table-lspace: 0; mso-table-rspace: 0"
                            >
                              <tbody>
                                <tr>
                                  <td class="pad" style="width: 100%">
                                    <div
                                      class="alignment"
                                      align="center"
                                      style="line-height: 10px"
                                    >
                                      <a
                                        href="http://www.example.com/"
                                        target="_blank"
                                        style="outline: none"
                                        tabindex="-1"
                                        ><img
                                          src=${companylogo}
                                          style="
                                            display: block;
                                            height: auto;
                                            border: 0;
                                            max-width: 251px;
                                            width: 100%;
                                          "
                                          width="251"
                                          alt="Logo"
                                          title="Logo"
                                      /></a>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>`;

export const userdetails = (data) => `<table
              class="row row-2"
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="mso-table-lspace: 0; mso-table-rspace: 0"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      class="row-content stack"
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="
                        mso-table-lspace: 0;
                        mso-table-rspace: 0;
                        background-color: #ffde79;
                        color: #000;
                        width: 640px;
                        margin: 0 auto;
                      "
                      width="640"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            width="100%"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              vertical-align: top;
                              border-top: 0;
                              border-right: 0;
                              border-bottom: 0;
                              border-left: 0;
                            "
                          >
                            <table
                              class="paragraph_block block-2"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="pad"
                                    style="
                                      padding-left: 10px;
                                      padding-right: 10px;
                                    "
                                  >
                                    <div
                                      style="
                                        color: #0c2b5b;
                                        font-family: Lato, Tahoma, Verdana,
                                          Segoe, sans-serif;
                                        font-size: 40px;
                                        line-height: 100%;
                                        text-align: center;
                                        mso-line-height-alt: 47px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          word-break: break-word;
                                        "
                                      >
                                        <span
                                          ><strong>${data.user.fullname} - <br/> ${data.user.email}</strong></span
                                        >
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table
                              class="paragraph_block block-3"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="pad"
                                    style="
                                      padding-bottom: 10px;
                                      padding-left: 10px;
                                      padding-right: 10px;
                                    "
                                  >
                                    <div
                                      style="
                                        color: #0c2b5b;
                                        font-family: Lato, Tahoma, Verdana,
                                          Segoe, sans-serif;
                                        font-size: 34px;
                                        line-height: 120%;
                                        text-align: center;
                                        mso-line-height-alt: 40.8px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          word-break: break-word;
                                        "
                                      >
                                        <span
                                          ><strong
                                            >Your invoice for - ${data.compound_name} of quantity - ${data.quantity}${data.quantity_unit}</strong
                                          ></span
                                        >
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>`;

export const orderHeader = (data) => `<table
              class="row row-4"
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="mso-table-lspace: 0; mso-table-rspace: 0"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      class="row-content stack"
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="
                        mso-table-lspace: 0;
                        mso-table-rspace: 0;
                        background-color: #8cc0e8;
                        color: #000;
                        width: 640px;
                        margin: 0 auto;
                      "
                      width="640"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            width="33.333333333333336%"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 15px;
                              padding-top: 25px;
                              vertical-align: top;
                              border-top: 0;
                              border-right: 0;
                              border-bottom: 0;
                              border-left: 0;
                            "
                          >
                            <table
                              class="image_block block-1"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="mso-table-lspace: 0; mso-table-rspace: 0"
                            >
                              <tbody>
                                <tr>
                                  <td class="pad" style="width: 100%">
                                    <div
                                      class="alignment"
                                      align="center"
                                      style="line-height: 10px"
                                    >
                                      <img
                                        src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/821/icon-01_2.png"
                                        style="
                                          display: block;
                                          height: auto;
                                          border: 0;
                                          max-width: 24px;
                                          width: 100%;
                                        "
                                        width="24"
                                        alt="Image"
                                        title="Image"
                                      />
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table
                              class="paragraph_block block-2"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="pad"
                                    style="
                                      padding-bottom: 10px;
                                      padding-left: 10px;
                                      padding-right: 10px;
                                      padding-top: 15px;
                                    "
                                  >
                                    <div
                                      style="
                                        color: #fff;
                                        font-family: Lato, Tahoma, Verdana,
                                          Segoe, sans-serif;
                                        font-size: 14px;
                                        line-height: 150%;
                                        text-align: center;
                                        mso-line-height-alt: 21px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          word-break: break-word;
                                        "
                                      >
                                        Invoice No:
                                      </p>
                                      <p
                                        style="
                                          margin: 0;
                                          word-break: break-word;
                                        "
                                      >
                                        <strong>${
                                          data._id.substring(0, 6) +
                                          data._id.substring(
                                            data._id.length - 4,
                                            data._id.length
                                          )
                                        }</strong>
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td
                            class="column column-2"
                            width="33.333333333333336%"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 15px;
                              padding-top: 25px;
                              vertical-align: top;
                              border-top: 0;
                              border-right: 0;
                              border-bottom: 0;
                              border-left: 0;
                            "
                          >
                            <table
                              class="image_block block-1"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="mso-table-lspace: 0; mso-table-rspace: 0"
                            >
                              <tbody>
                                <tr>
                                  <td class="pad" style="width: 100%">
                                    <div
                                      class="alignment"
                                      align="center"
                                      style="line-height: 10px"
                                    >
                                      <img
                                        src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/821/icon-02_2.png"
                                        style="
                                          display: block;
                                          height: auto;
                                          border: 0;
                                          max-width: 22px;
                                          width: 100%;
                                        "
                                        width="22"
                                        alt="Image"
                                        title="Image"
                                      />
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table
                              class="paragraph_block block-2"
                              width="100%"
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                            >
                              <tbody>
                                <tr>
                                  <td class="pad">
                                    <div
                                      style="
                                        color: #fff;
                                        font-family: Lato, Tahoma, Verdana,
                                          Segoe, sans-serif;
                                        font-size: 14px;
                                        line-height: 150%;
                                        text-align: center;
                                        mso-line-height-alt: 21px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          word-break: break-word;
                                        "
                                      >
                                        Invoice Date:
                                      </p>
                                      <p
                                        style="
                                          margin: 0;
                                          word-break: break-word;
                                        "
                                      >
                                        <strong>${data.dateofinvoice}</strong>
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td
                            class="column column-3"
                            width="33.333333333333336%"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 15px;
                              padding-top: 25px;
                              vertical-align: top;
                              border-top: 0;
                              border-right: 0;
                              border-bottom: 0;
                              border-left: 0;
                            "
                          >
                            <table
                              class="image_block block-1"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="mso-table-lspace: 0; mso-table-rspace: 0"
                            >
                              <tbody>
                                <tr>
                                  <td class="pad" style="width: 100%">
                                    <div
                                      class="alignment"
                                      align="center"
                                      style="line-height: 10px"
                                    >
                                      <img
                                        src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/821/icon-03_2.png"
                                        style="
                                          display: block;
                                          height: auto;
                                          border: 0;
                                          max-width: 25px;
                                          width: 100%;
                                        "
                                        width="25"
                                        alt="Image"
                                        title="Image"
                                      />
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table
                              class="paragraph_block block-2"
                              width="100%"
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                            >
                              <tbody>
                                <tr>
                                  <td class="pad">
                                    <div
                                      style="
                                        color: #fff;
                                        font-family: Lato, Tahoma, Verdana,
                                          Segoe, sans-serif;
                                        font-size: 14px;
                                        line-height: 150%;
                                        text-align: center;
                                        mso-line-height-alt: 21px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          word-break: break-word;
                                        "
                                      >
                                        Amount Paid:
                                      </p>
                                      <p
                                        style="
                                          margin: 0;
                                          word-break: break-word;
                                        "
                                      >
                                        <strong>${
                                          data.need_to_pay
                                        } (CAD)</strong>
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>`;

export const clientDetails = (data) => `<table
              class="row row-5"
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="mso-table-lspace: 0; mso-table-rspace: 0"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      class="row-content stack"
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="
                        mso-table-lspace: 0;
                        mso-table-rspace: 0;
                        background-color: #5c98c7;
                        color: #000;
                        width: 640px;
                        margin: 0 auto;
                      "
                      width="640"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            width="66.66666666666667%"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 20px;
                              padding-left: 30px;
                              padding-right: 30px;
                              padding-top: 20px;
                              vertical-align: top;
                              border-top: 0;
                              border-right: 0;
                              border-bottom: 0;
                              border-left: 0;
                            "
                          >
                            <table
                              class="paragraph_block block-1"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="pad"
                                    style="
                                      padding-left: 10px;
                                      padding-right: 10px;
                                      padding-top: 10px;
                                    "
                                  >
                                    <div
                                      style="
                                        color: #fff;
                                        font-family: Lato, Tahoma, Verdana,
                                          Segoe, sans-serif;
                                        font-size: 20px;
                                        line-height: 120%;
                                        text-align: left;
                                        mso-line-height-alt: 24px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          word-break: break-word;
                                        "
                                      >
                                        <span><strong>Customer Details:</strong></span>
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table
                              class="paragraph_block block-2"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="pad"
                                    style="
                                      padding-bottom: 10px;
                                      padding-left: 10px;
                                      padding-right: 10px;
                                    "
                                  >
                                    <div
                                      style="
                                        color: #fff;
                                        font-family: Lato, Tahoma, Verdana,
                                          Segoe, sans-serif;
                                        font-size: 14px;
                                        line-height: 150%;
                                        text-align: left;
                                        mso-line-height-alt: 21px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          word-break: break-word;
                                        "
                                      >
                                      ${data.user?.fullname}
                                      </p>
                                      <p
                                        style="
                                          margin: 0;
                                          word-break: break-word;
                                        "
                                      >
                                      ${data.user?.email}
                                      </p>
                                      <p
                                        style="
                                          margin: 0;
                                          word-break: break-word;
                                        "
                                      >
                                        ${data.user?.phoneno}
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td
                            class="column column-2"
                            width="33.333333333333336%"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 35px;
                              padding-top: 40px;
                              vertical-align: top;
                              border-top: 0;
                              border-right: 0;
                              border-bottom: 0;
                              border-left: 0;
                            "
                          >
                            <table
                              class="paragraph_block block-1"
                              width="100%"
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                            >
                              <tbody>
                                <tr>
                                  <td class="pad">
                                    <div
                                      style="
                                        color: #fff;
                                        font-family: Lato, Tahoma, Verdana,
                                          Segoe, sans-serif;
                                        font-size: 14px;
                                        line-height: 150%;
                                        text-align: center;
                                        mso-line-height-alt: 21px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          word-break: break-word;
                                        "
                                      >
                                        Amount Paid:
                                      </p>
                                      <p
                                        style="
                                          margin: 0;
                                          word-break: break-word;
                                        "
                                      >
                                        <strong>${data.need_to_pay} (CAD)</strong>
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>`;

export const orderTableHead = (data) => `<table
              class="row row-6"
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="mso-table-lspace: 0; mso-table-rspace: 0"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      class="row-content"
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="
                        mso-table-lspace: 0;
                        mso-table-rspace: 0;
                        background-color: #6da3cd;
                        color: #000;
                        width: 640px;
                        margin: 0 auto;
                      "
                      width="640"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-2"
                            width="25%"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: top;
                              border-top: 0;
                              border-right: 0;
                              border-bottom: 0;
                              border-left: 0;
                            "
                          >
                            <table
                              class="paragraph_block block-1"
                              width="100%"
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                            >
                              <tbody>
                                <tr>
                                  <td class="pad">
                                    <div
                                      style="
                                        color: #fff;
                                        font-family: Lato, Tahoma, Verdana,
                                          Segoe, sans-serif;
                                        font-size: 14px;
                                        line-height: 120%;
                                        text-align: center;
                                        mso-line-height-alt: 16.8px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          word-break: break-word;
                                        "
                                      >
                                        <strong>INGREDIENTS</strong>
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td
                            class="column column-3"
                            width="25%"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: top;
                              border-top: 0;
                              border-right: 0;
                              border-bottom: 0;
                              border-left: 0;
                            "
                          >
                            <table
                              class="paragraph_block block-1"
                              width="100%"
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                            >
                              <tbody>
                                <tr>
                                  <td class="pad">
                                    <div
                                      style="
                                        color: #fff;
                                        font-family: Lato, Tahoma, Verdana,
                                          Segoe, sans-serif;
                                        font-size: 14px;
                                        line-height: 120%;
                                        text-align: center;
                                        mso-line-height-alt: 16.8px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          word-break: break-word;
                                        "
                                      >
                                        <strong>PACK SIZE</strong>
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td
                            class="column column-4"
                            width="25%"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: top;
                              border-top: 0;
                              border-right: 0;
                              border-bottom: 0;
                              border-left: 0;
                            "
                          >
                            <table
                              class="paragraph_block block-1"
                              width="100%"
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                            >
                              <tbody>
                                <tr>
                                  <td class="pad">
                                    <div
                                      style="
                                        color: #fff;
                                        font-family: Lato, Tahoma, Verdana,
                                          Segoe, sans-serif;
                                        font-size: 14px;
                                        line-height: 120%;
                                        text-align: center;
                                        mso-line-height-alt: 16.8px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          word-break: break-word;
                                        "
                                      >
                                        <strong>PRICE / PACK</strong>
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>`;

export const orderTableBody = ({ index, ...data }) => `<table
              class="row row-7"
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="mso-table-lspace: 0; mso-table-rspace: 0"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      class="row-content"
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="
                        mso-table-lspace: 0;
                        mso-table-rspace: 0;
                        background-color: #5c98c7;
                        color: #000;
                        width: 640px;
                        margin: 0 auto;
                      "
                      width="640"
                    >
                      <tbody>
                        <tr>
                          
                          <td
                            class="column column-2"
                            width="25%"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              border-bottom: 1px solid #6da3cd;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: top;
                              border-top: 0;
                              border-right: 0;
                              border-left: 0;
                            "
                          >
                            <table
                              class="paragraph_block block-1"
                              width="100%"
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                            >
                              <tbody>
                                <tr>
                                  <td class="pad">
                                    <div
                                      style="
                                        color: #fff;
                                        font-family: Lato, Tahoma, Verdana,
                                          Segoe, sans-serif;
                                        font-size: 14px;
                                        line-height: 120%;
                                        text-align: center;
                                        mso-line-height-alt: 16.8px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          word-break: break-word;
                                        "
                                      >
                                        ${data.name}
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td
                            class="column column-3"
                            width="25%"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              border-bottom: 1px solid #6da3cd;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: top;
                              border-top: 0;
                              border-right: 0;
                              border-left: 0;
                            "
                          >
                            <table
                              class="paragraph_block block-1"
                              width="100%"
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                            >
                              <tbody>
                                <tr>
                                  <td class="pad">
                                    <div
                                      style="
                                        color: #fff;
                                        font-family: Lato, Tahoma, Verdana,
                                          Segoe, sans-serif;
                                        font-size: 14px;
                                        line-height: 120%;
                                        text-align: center;
                                        mso-line-height-alt: 16.8px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          word-break: break-word;
                                        "
                                      >
                                        ${data.pack_size}
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td
                            class="column column-4"
                            width="25%"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              border-bottom: 1px solid #6da3cd;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: top;
                              border-top: 0;
                              border-right: 0;
                              border-left: 0;
                            "
                          >
                            <table
                              class="paragraph_block block-1"
                              width="100%"
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                            >
                              <tbody>
                                <tr>
                                  <td class="pad">
                                    <div
                                      style="
                                        color: #fff;
                                        font-family: Lato, Tahoma, Verdana,
                                          Segoe, sans-serif;
                                        font-size: 14px;
                                        line-height: 120%;
                                        text-align: center;
                                        mso-line-height-alt: 16.8px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          word-break: break-word;
                                        "
                                      >
                                        ${data.price}
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>`;

export const orderSubTotal = (data) => `<table
              class="row row-10"
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="mso-table-lspace: 0; mso-table-rspace: 0"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      class="row-content stack"
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="
                        mso-table-lspace: 0;
                        mso-table-rspace: 0;
                        background-color: #5c98c7;
                        color: #000;
                        width: 640px;
                        margin: 0 auto;
                      "
                      width="640"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            width="50%"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 5px;
                              padding-top: 30px;
                              vertical-align: top;
                              border-top: 0;
                              border-right: 0;
                              border-bottom: 0;
                              border-left: 0;
                            "
                          >
                            <table
                              class="text_block block-1"
                              width="100%"
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                            >
                              <tbody>
                                <tr>
                                  <td class="pad"></td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td
                            class="column column-2"
                            width="50%"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 5px;
                              padding-top: 20px;
                              vertical-align: top;
                              border-top: 0;
                              border-right: 0;
                              border-bottom: 0;
                              border-left: 0;
                            "
                          >
                            <table
                              class="paragraph_block block-1"
                              width="100%"
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              role="presentation"
                              style="
                                mso-table-lspace: 0;
                                mso-table-rspace: 0;
                                word-break: break-word;
                              "
                            >
                              <tbody>
                                <tr>
                                  <td class="pad">
                                    <div
                                      style="
                                        color: #fff;
                                        font-family: Lato, Tahoma, Verdana,
                                          Segoe, sans-serif;
                                        font-size: 16px;
                                        line-height: 180%;
                                        text-align: center;
                                        mso-line-height-alt: 28.8px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          word-break: break-word;
                                        "
                                      >
                                        <span
                                          >Subtotal:<strong>
                                            ${data.total_price} (CAD)</strong
                                          ></span
                                        ><br /><span
                                          >Amount Pay:
                                          <strong>${data.need_to_pay} (CAD)</strong></span
                                        >
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>`;
