import React from "react";
import "../../styles/HelpDeskPlans.css";
import Plans  from "../../data/globalHeader.json"

const PriceTable = () => {

    const rows = Array.from({ length: 10 }, (_, index) => index);
  return (
    <>
      <div className="helpdesk-plans-container">
        <p>Compare Help Desk Plans</p>
      </div>

      <div className="feature-comparison-table">
        <div className="feature-comparison-table-header">
          <div className="feature-comparison-table-header-container">
            <div className="feature-comparison-table-header-container-row">
              <div className="header-container-row-table">
                <div className="table-title">
                  <p></p>
                </div>
                <div className="table-column">
                  <p>
                    <span>Mighty</span>
                  </p>
                </div>
                <div className="table-column">
                  <p>
                    <span>Fantastic</span>
                  </p>
                </div>
                <div className="table-column">
                  <p>
                    <span>Enterprise</span>
                  </p>
                </div>
                <div className="table-column">
                  <p>
                    <span>Enterprise Plus</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pricing-table-features">
        <div className="pricing-table-features-container">
          <div className="pricing-table-features-container-row">
            <div className="row-container">
              <div className="row-container-header">
                <div
                  className="header-container-row-table"
                  style={{ border: "none" }}
                >
                  <div className="table-title" style={{fontWeight: 'bolder'}}>
                    <p>Ticket Management</p>
                  </div>
                  <div className="table-column">
                    {/* <p>
                      <span></span>
                    </p> */}
                  </div>
                  <div className="table-column">
                    {/* <p>
                      <span></span>
                    </p> */}
                  </div>
                  <div className="table-column">
                    {/* <p>
                      <span></span>
                    </p> */}
                  </div>
                  <div className="table-column">
                    {/* <p>
                      <span></span>
                    </p> */}
                  </div>
                </div>
              </div>
              {Plans.helpDeskPlans.map((item,rowIndex) => (
              <div key={rowIndex} className="plain-row">
                <div className="row-container-header-table">

                  <div
                    className="header-container-row-table"
                    style={{ border: "none" , backgroundColor: rowIndex % 2 === 0 ? '#ffffff' : '#f7f7f7' }}

                  >
                    <div className="table-title">
                      <p>{item.ticketManagement}</p>
                    </div>
                    <div className={ item.mighty ? 'table-column-tick' : 'table-column-dash'}>
                      <p></p>
                    </div>
                    <div className={ item.fanastic ? 'table-column-tick' : 'table-column-dash'}>
                      <p></p>
                    </div>
                    <div className={ item.enterPrise ? 'table-column-tick' : 'table-column-dash'}>
                      <p></p>
                    </div>
                    <div className={ item.enterPricePlus ? 'table-column-tick' : 'table-column-dash'}>
                      <p></p>
                    </div>
                  </div>
                </div>
              
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceTable;
