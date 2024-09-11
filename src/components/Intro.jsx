import { Handle, Position } from "@xyflow/react";
import React from "react";

const Intro = () => {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <table
        cellSpacing="0"
        cellPadding="0"
        border="0"
        align="center"
        width="100%"
      >
        <tbody>
          <tr>
            <td>
              <table
                cellSpacing="0"
                cellPadding="0"
                border="0"
                align="center"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td align="left">
                      <span className="newsletterTitle">
                        Style, które Cię zainspirują
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table cellSpacing="0" cellPadding="0" border="0" width="100%">
                <tbody>
                  <tr>
                    <td className="newsletterBottom35px"></td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table
                cellSpacing="0"
                cellPadding="0"
                border="0"
                align="center"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td align="left">
                      <span className="newsletterParagraph">
                        Odkryj, jak łatwo możesz odmienić swój salon dzięki
                        naszym meblowym aranżacjom.
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
};

export default Intro;
