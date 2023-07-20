export const Common: any = {
  checkWeather: {
      checkLocation: function(location: string) {
        switch (location) {
          case 'Seoul' :
            return location = "서울";
        }
      }
  }
};