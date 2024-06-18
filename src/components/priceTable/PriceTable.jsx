import React from "react";
import "../../styles/HelpDeskPlans.css";
import Plans from "../../data/globalHeader.json";

import HelpDeskPlans from "../../data/priceTableData.json";

const PriceTable = () => {
  const rows = Array.from({ length: 10 }, (_, index) => index);
  return (
    <div>
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
              {HelpDeskPlans.helpDeskPlans.map((category, categoryIndex) => (
                <>
                  <div className="row-container-header">
                    <div
                      className="header-container-row-table"
                      style={{ border: "none" }}
                    >
                      <div
                        className="table-title"
                        style={{ fontWeight: "bolder" }}
                      >
                        <p>{category.category}</p>
                      </div>
                      <div className="table-column"></div>
                      <div className="table-column"></div>
                      <div className="table-column"></div>
                      <div className="table-column"></div>
                    </div>
                  </div>

                  {category.features.map((item, rowIndex) => (
                    <div key={rowIndex} className="plain-row">
                      <div className="row-container-header-table">
                        <div
                          className="header-container-row-table"
                          style={{
                            border: "none",
                            backgroundColor:
                              rowIndex % 2 === 0 ? "#ffffff" : "#f7f7f7",
                          }}
                        >
                          <div className="table-title">
                            <p>{item.ticketManagement}</p>
                          </div>
                          <div
                            className={
                              typeof item.mighty === "boolean"
                                ? item.mighty
                                  ? "table-column-tick"
                                  : "table-column-dash"
                                : "table-column-no-img"
                            }
                          >
                            <p>{item.mighty}</p>
                          </div>
                          <div
                            className={
                              typeof item.fanastic === "boolean"
                                ? item.fanastic
                                  ? "table-column-tick"
                                  : "table-column-dash"
                                : "table-column-no-img"
                            }
                          >
                            <p>{item.fanastic}</p>
                          </div>
                          <div
                            className={
                              typeof item.enterPrise === "boolean"
                                ? item.enterPrise
                                  ? "table-column-tick"
                                  : "table-column-dash"
                                : "table-column-no-img"
                            }
                          >
                            <p>{item.enterPrise}</p>
                          </div>
                          <div
                            className={
                              typeof item.enterPricePlus === "boolean"
                                ? item.enterPricePlus
                                  ? "table-column-tick"
                                  : "table-column-dash"
                                : "table-column-no-img"
                            }
                          >
                            <p>{item.enterPricePlus}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ))}
            </div>
            <p className="plans-planned">
              * Planned
              <br/>
              # Only with custom domain
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceTable;
