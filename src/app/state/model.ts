export interface WebsiteData {
  user: User;
  homepage: Homepage;
  about: About;
  contact: Contact;
}

export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string
}

export class Homepage {
  title: string;
  tag: string;
}

export class About {
  name: string;
  purpose: string;
  bio: string;
}

export class Contact {
  name: string;
  email: string;
  number?: number;
  company?: string;
  notes?: string;
}