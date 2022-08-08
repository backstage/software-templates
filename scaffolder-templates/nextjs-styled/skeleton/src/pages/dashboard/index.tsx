import * as React from 'react'
import { GetServerSideProps } from 'next'
import { DefaultLayout } from '@/layouts'
import { NextPageWithLayout } from '@/pages/_app'

const Index: NextPageWithLayout = () => <div>Dashboard page</div>

Index.getLayout = (page: React.ReactElement) => (
  <DefaultLayout>{page}</DefaultLayout>
)

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {},
})

export default Index
