'use client'
import React from 'react'
import Layout from '../../layout';
import CalendarComponent from '../../components/calendar';
import AppWrapper from '../../components/AppWrapper';
const CalendarPage = () => {
  return (
    <AppWrapper>
    <Layout>
        <CalendarComponent/>
    </Layout>
    </AppWrapper>
  )
}

export default CalendarPage;
