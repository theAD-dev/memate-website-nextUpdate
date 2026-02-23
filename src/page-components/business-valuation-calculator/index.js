'use client'
import React from 'react'
import Layout from '../../layout';
import ValuationCalculatorComponent from '../../components/business-valuation-calculator';
import AutomotiveQuesitonAndAns from '../../components/business-valuation-calculator/automotive-question-ans';
import AppWrapper from '../../components/AppWrapper';
import NextStep from '@/components/next-step';
const ValuationCalculatorPage = () => {
  return (
    <AppWrapper>
    <Layout>
      <div className="bgshadowwrapper">
        <ValuationCalculatorComponent/> 
         <NextStep text="Book a Demo" />
        <AutomotiveQuesitonAndAns />  
        </div>
    </Layout>
    </AppWrapper>
  )
}


export default ValuationCalculatorPage;
