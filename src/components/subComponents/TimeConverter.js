
export default {

	methods: {
		timeConverter(UNIX_timestamp) {
			var a = new Date(Number(UNIX_timestamp));
			return a;
		},
		getDay(d) {
			return d.getDate()
        },
        getTime12hr(d) {
            let hour =d.getHours();
            let meridiem = (( hour - 12 ) >= 0)?"PM":"AM";
            let H = (meridiem == "AM")? hour: hour - 12;
			return H+':'+d.getMinutes() +':'+d.getSeconds() +' '+meridiem;
        },
        getTime24hr(d) {
           	return d.getHours()+':'+d.getMinutes() +':'+d.getSeconds();
		},
		getYear(d) {
			return d.getYear()
		},
		getMonthAbrv(d) {
			let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
			return months[d.getMonth()];
		},
		getMonthNumber(d) {
			return d.getMonth() + 1;
		},
		getMonthFull(d) {
			let months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
			return months[d.getMonth()];
		},
		dateString(timesstamp, format) {
			let date = this.timeConverter(timesstamp), string = '';
			switch (format) {
                case 'dd/mm/yyyy_h:m:s':
					string = this.getDay(date) + '/' + this.getMonthNumber(date) + '/' + this.getYear(date);
					break;
				case 'dd/mm/yyyy':
					string = this.getDay(date) + '/' + this.getMonthNumber(date) + '/' + this.getYear(date);
					break;
				case 'mm/dd/yyyy':
					string = this.getDay(date) + '/' + this.getMonthNumber(date) + '/' + this.getYear(date);
					break;
				case 'dayMonYear':
					string = this.getDay(date) + ' ' + this.getMonthAbrv(date) + ' ' + this.getYear(date);
					break;
				case 'monDayYear':
					string = this.getMonthAbrv(date) + ' ' + this.getDay(date) + ', ' + this.getYear(date);
					break;
				case 'monthDayYear':
					string = this.getMonth(date) + ' ' + this.getDay(date) + ', ' + this.getYear(date);
					break;
				default:
					break;

			}
			return string;
		}
	}
}