export default interface Picture {
  uri: string;
  author: string;
  name: string;
  description: string;
  tags: string[];
  price: {
    small: number;
    medium: number;
    large: number;
  };
  exclusive: {
    isSold: boolean;
    price: number;
  };
}
