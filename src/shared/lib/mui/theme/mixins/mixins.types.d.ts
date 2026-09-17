import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Mixins {
    navigationBar: {
      height: {
        mobile: number;
        desktop: number;
      };
    };
  }

  interface MixinsOptions {
    navigationBar?: Mixins['navigationBar'];
  }
}
