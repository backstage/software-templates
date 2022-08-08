import * as React from 'react'
import * as S from './Default.styles'

type DefaultLayoutProps = {
  children: React.ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return <S.Container>{children}</S.Container>
}
