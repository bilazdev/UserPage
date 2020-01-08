import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  public languages = ['ar', 'en']

  public language = 'en';
  private dictionary = {
    ar: {
      languange: 'ar',
      values: {
        example: 'Beispiel',
        profile: 'الملف الشخصي',
        logout:'تسجيل الخروج',
        login: 'تسجيل الدخول',
        register: 'التسجيل',
        email: 'البريد الإلكتروني',
        password: 'كلمة السر',
        edit: 'تعديل',
        listAllUsers: 'عرض كافة المستخدمين',
        delete: 'حذف',
        view: 'عرض',
        next: 'التالي',
        back: 'السابق',
        sure: 'متأكد؟',
        undo: 'إعادة',
        submit: 'إدخال',
        sorry: 'خطأ في الصفحة'
      },
    },
    en: {
      languange: 'en',
      values: {
        example: 'Example',
        profile: 'Profile',
        logout:'Logout',
        login: 'LogIn',
        register: 'Register',
        email: 'Email',
        password: 'Password',
        edit: 'Edit',
        listAllUsers: 'List All Users',
        delete: 'Delete',
        view: 'View',
        next: 'Next',
        back: 'Back',
        sure: 'Sure?',
        undo: 'Undo',
        submit: 'ٍSubmit',
        sorry: 'Error in this page'



      },
    },
  }
  translate(key: string): string {
    if (this.dictionary[this.language] != null) {
      console.log(this.dictionary[this.language].values[key],key,"asdaeeee");
      return this.dictionary[this.language].values[key]
    }
  }
  constructor() { }
}
