'use client'
import React from 'react'
import Layout from '../../layout';
import TaskManagementComponent from '../../components/task-management';
import AppWrapper from '../../components/AppWrapper';

const TaskManagementPage = () => {
  return (
    <AppWrapper>
    <Layout>
        <TaskManagementComponent/>
    </Layout>
    </AppWrapper>
  )
}

export default TaskManagementPage;
