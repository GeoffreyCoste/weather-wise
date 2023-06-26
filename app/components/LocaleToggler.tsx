'use client'

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import { i18n } from '@/i18n-config';
import { useLanguage } from '../utils/hooks/useLanguage';


const LocaleToggler = () => {

    const { language, handleLanguageChange } = useLanguage();

    const pathname = usePathname();
    const redirectToPathName = (locale: string) => {
        if (!pathname) return '/'
        const segments = pathname.split('/');
        segments[1] = locale;
        return segments.join('/');
    }

    useEffect(() => {
      console.log('language: ', language);
    })

    return (
        <ul>
            {i18n.locales.map((locale) => {
              return (
                <li key={`${locale}-05fa7bbc-ce41-4896-864b-8939744b98a7`} onClick={() => handleLanguageChange!(locale)}>
                  <Link href={redirectToPathName(locale)}>{locale}</Link>
                </li>
              )
            })}
        </ul>
    )
}

export default LocaleToggler;