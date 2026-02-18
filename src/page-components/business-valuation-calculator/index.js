'use client'
import React from 'react'
import Layout from '../../layout';
import ValuationCalculatorComponent from '../../components/business-valuation-calculator';
import AppWrapper from '../../components/AppWrapper';
const ValuationCalculatorPage = () => {
  return (
    <AppWrapper>
    <Layout>
      <div className="bgshadowwrapper">
        <ValuationCalculatorComponent/>  
        </div>
    </Layout>
    </AppWrapper>
  )
}


export default ValuationCalculatorPage;
