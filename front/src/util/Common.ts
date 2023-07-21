export const Common: any = {
  checkWeather: {
      checkLocation: function(location: string) {
        switch (location) {
          case 'Seoul' :
            return location = "서울";
        }
      },
      
      transKelvin: function(temp: number) {
        const trans_number: number = 273.15;
        temp = temp - trans_number;
        return temp.toFixed(1);
      }
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