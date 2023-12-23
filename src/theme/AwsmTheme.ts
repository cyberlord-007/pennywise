type AwsmTheme = {
  background: {
    primary: string;
    secondary: string;
  };
  foreground: {
    primary: string;
    secondary: string;
  };
};

export const AwsmDarkTheme: AwsmTheme = {
  background: {
    primary: '#020817',
    secondary: '#1E293B',
  },
  foreground: {
    primary: '#F7FAFC',
    secondary: '#788599',
  },
  //   text: {
  //     primary: '#020817',
  //   },
};

export const AwsmLightTheme: AwsmTheme = {
  background: {
    primary: '#F7FAFC',
    secondary: '#333845',
  },
  foreground: {
    primary: '#020817',
    secondary: '#1E293B',
  },
};
