import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { TodosProvider } from './Component/TodoList'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todo-App',
  description: 'Simple todo app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TodosProvider>
        {children}
        </TodosProvider>
       
        </body>
    </html>
  )
}
