import * as React from 'react'
import type { NextPageWithLayout } from '@/pages/_app'

const Index: NextPageWithLayout = () => <h1>Home</h1>

Index.getLayout = (page: React.ReactElement) => <>{page}</>

export default Index
