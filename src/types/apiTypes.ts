// export type Room = {
//   id: number;
//   user_id: number;
//   name: string;
//   explanation: string;
//   started_at: string; // 日時の文字列として扱う場合、ISO 8601 形式などに変換する必要があります
//   finished_at: string; // 同上
//   created_at: string; // 同上
//   updated_at: string; // 同上
//   deleted_at: Boolean | null; // もしnullを許容する場合
// }
export class Room {
  id: string = '';
  user_id: string = '';
  name: string = '';
  discription: string = '';
  started_at: string = ''; // 日時の文字列として扱う場合、ISO 8601 形式などに変換する必要
  finished_at: string = '';
  created_at: string = '';
  updated_at: string = '';
  deleted_at: Boolean | null = null; // もしnullを許容する場合
}









//////////////////以下見本///////////////////////////////////

//主にAPIから取得するjsonの型情報を定義
//reduxのinitialStateで簡単に指定できるよう、classで定義しインスタンスを渡す
//クラス定義で同時にインターフェースも定義されるので便利

//state.weatherの型
export class initAreaState {
  areaObj = new AreaInfo();
  areaArray: areaArrayType = [];
  subAreaArray: Array<[string, string]> = [];
  status: string = '';
}

export type areaArrayType = Array<[string, CenterInfo]>;

export class AreaInfo {
  centers: { [key: string]: CenterInfo } = {};
  offices: { [key: string]: OfficeInfo } = {};
}

class CenterInfo {
  name: string = '';
  enName: string = '';
  officeName: string = '';
  children: string[] = [];
}

class OfficeInfo {
  name: string = '';
  enName: string = '';
  officeName: string = '';
  parent: string = '';
  children: string[] = [];
}

///////////////////////state.weatherの型
export class initWeatherState {
  weathers: [Weathers] = [new Weathers()]
  areaNum: string = '';
  status: string = '';
}

export class Weathers {
  publishingOffice: string = '';
  reportDatetime: string = '';
  timeSeries: TimeSeries[] = [new TimeSeries()];
  tempAverage: TemperatureAverage = new TemperatureAverage();
  precipAverage: PrecipitationAverage = new PrecipitationAverage()
}

class TimeSeries {
  timeDefines: string[] = [];
  areas: AreaReport[] = [];
}

class AreaReport {
  area: { name: string; code: string } = { name: '', code: '' };
  weatherCodes: string[] = [];
  weathers: string[] = [];
  winds?: string[];
  waves?: string[];
  pops?: string[];
  reliabilities?: string[];
  temps?: string[];
  tempsMin?: string[];
  tempsMinUpper?: string[];
  tempsMinLower?: string[];
  tempsMax?: string[];
  tempsMaxUpper?: string[];
  tempsMaxLower?: string[];
}

class TemperatureAverage {
  areas: TemperatureArea[] = [];
}

class TemperatureArea {
  area: { name: string, code: string } = { name: '', code: '' };
  min: string = '';
  max: string = '';
}

class PrecipitationAverage {
  areas: PrecipitationArea[] = [];
}

class PrecipitationArea {
  area: { name: string, code: string } = { name: '', code: '' };
  min: string = '';
  max: string = '';
}