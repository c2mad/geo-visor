import React from "react";

export const TableData = ({ properties }) => {
  const {
    Vp_m_s,
    Vp_m_s_1,
    Vp_m_s_2,
    Vp_m_s_3,
    Vp_m_s_4,
    Vp_m_s_5,
    Vp_m_s_6,
    Vp_Deph,
    Vp_Deph_1,
    Vp_Deph_2,
    Vp_Deph_3,
    Vp_Deph_4,
    Vp_Deph_5,
    Vp_Deph_6,
    Vs_m_s_,
    Vs_m_s_1,
    Vs_m_s_2,
    Vs_m_s_3,
    Vs_m_s_4,
    Vs_m_s_5,
    Vs_m_s_6,
    Vs_Deph,
    Vs_Deph_1,
    Vs_Deph_2,
    Vs_Deph_3,
    Vs_Deph_4,
    Vs_Deph_5,
    Vs_Deph_6,
    NEC,
    NEC_1,
    NEC_2,
    NEC_3,
    NEC_4,
    NEC_5,
    NEC_6,
    SUCS,
    SUCS_1,
    SUCS_2,
    SUCS_3,
    SUCS_4,
    SUCS_5,
    SUCS_6,
  } = properties;
  return (
    <Table>
      <thead>
        <tr>
          <THead>Vp(m/s)</THead>
          <THead>Profundidad de estrato de Vp(m)</THead>
          <THead>Vs(m/s)</THead>
          <THead>Profundidad de estrato de Vs(m)</THead>
          <THead>Tipo de suelo de acorde a NEC</THead>
          <THead>Tipo de suelo de acorde a SUCS</THead>
        </tr>
      </thead>
      <tbody>
        <tr>
          <TData>{Vp_m_s}</TData>
          <TData>{Vp_Deph}</TData>
          <TData>{Vs_m_s_}</TData>
          <TData>{Vs_Deph}</TData>
          <TData>{NEC}</TData>
          <TData>{SUCS}</TData>
        </tr>
        <tr>
          <TData>{Vp_m_s_1}</TData>
          <TData>{Vp_Deph_1}</TData>
          <TData>{Vs_m_s_1}</TData>
          <TData>{Vs_Deph_1}</TData>
          <TData>{NEC_1}</TData>
          <TData>{SUCS_1}</TData>
        </tr>
        <tr>
          <TData>{Vp_m_s_2}</TData>
          <TData>{Vp_Deph_2}</TData>
          <TData>{Vs_m_s_2}</TData>
          <TData>{Vs_Deph_2}</TData>
          <TData>{NEC_2}</TData>
          <TData>{SUCS_2}</TData>
        </tr>
        <tr>
          <TData>{Vp_m_s_3}</TData>
          <TData>{Vp_Deph_3}</TData>
          <TData>{Vs_m_s_3}</TData>
          <TData>{Vs_Deph_3}</TData>
          <TData>{NEC_3}</TData>
          <TData>{SUCS_3}</TData>
        </tr>
        <tr>
          <TData>{Vp_m_s_4}</TData>
          <TData>{Vp_Deph_4}</TData>
          <TData>{Vs_m_s_4}</TData>
          <TData>{Vs_Deph_4}</TData>
          <TData>{NEC_4}</TData>
          <TData>{SUCS_4}</TData>
        </tr>
        <tr>
          <TData>{Vp_m_s_5}</TData>
          <TData>{Vp_Deph_5}</TData>
          <TData>{Vs_m_s_5}</TData>
          <TData>{Vs_Deph_5}</TData>
          <TData>{NEC_5}</TData>
          <TData>{SUCS_5}</TData>
        </tr>
        <tr>
          <TData>{Vp_m_s_6}</TData>
          <TData>{Vp_Deph_6}</TData>
          <TData>{Vs_m_s_6}</TData>
          <TData>{Vs_Deph_6}</TData>
          <TData>{NEC_6}</TData>
          <TData>{SUCS_6}</TData>
        </tr>
      </tbody>
    </Table>
  );
};

const Table = ({ children }) => {
  return (
    <table className="table-fixed border-collapse rounded-lg border border-gray-300 text-slate-700">
      {children}
    </table>
  );
};

const THead = ({ children }) => {
  return <th className="border border-gray-300 p-2">{children}</th>;
};

const TData = ({ children }) => {
  return <td className="border border-gray-300 p-2 text-center">{children}</td>;
};
