import { FaBook, FaBriefcase, FaCode } from 'react-icons/fa'
import { RiComputerFill } from 'react-icons/ri'
import { BsFillPenFill, BsKeyboardFill, BsGraphUpArrow } from 'react-icons/bs'
import { DiCodeBadge } from 'react-icons/di'
import React from 'react'
const sublinks = [
  {
    page: 'find jobs',
    links: [
      { label: 'IT & Coding', icon: <RiComputerFill />, url: '/products' },
      { label: 'Content Writing', icon: <BsFillPenFill />, url: '/products' },
      { label: 'Data Entry', icon: <BsKeyboardFill />, url: '/products' },
      { label: 'Finance & Acc', icon: <BsGraphUpArrow />, url: '/products' },
    ],
  },
  {
    page: 'hire writers',
    links: [
      { label: 'Graphic designers', icon: <DiCodeBadge />, url: '/products' },
      { label: 'Software developers', icon: <FaCode />, url: '/products' },
    ],
  },
  {
    page: 'company',
    links: [
      { label: 'about', icon: <FaBriefcase />, url: '/products' },
      { label: 'customers', icon: <FaBriefcase />, url: '/products' },
    ],
  },
]

export default sublinks
