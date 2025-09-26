'use client'
import React from 'react'
import Layout from '../../layout';
import InternalChatComponent from '../../components/internal-chat';
import AppWrapper from '../../components/AppWrapper';

const InternalChatPage = () => {
  return (
    <AppWrapper>
    <Layout>
        <InternalChatComponent/>
    </Layout>
    </AppWrapper>
  )
}

export default InternalChatPage;
