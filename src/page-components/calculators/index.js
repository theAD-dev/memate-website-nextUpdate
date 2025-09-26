'use client'
import React from 'react'
import Layout from '../../layout';
import CalculatorsComponent from '../../components/calculators';
import AppWrapper from '../../components/AppWrapper';
const CalculatorsPage = () => {
  return (
    <AppWrapper>
    <Layout>
        <CalculatorsComponent/>
    </Layout>
    </AppWrapper>
  )
}

export default CalculatorsPage;
