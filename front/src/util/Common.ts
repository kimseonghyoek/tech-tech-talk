export const Common: any = {
  checkWeather: {
      checkLocation: function(location: string) {
        switch (location) {
          case 'Seoul' :
            return location = "서울";
        }
      },
      
  },

  getDay: {
    getDate: function(v: any) {
      const date = new Date();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      return v = {month, day}
    }
  },

};