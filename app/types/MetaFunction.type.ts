import { RouteData } from '@remix-run/react/routeData';
import { AppData, HtmlMetaDescriptor } from 'remix';
import { Params } from 'react-router';

export interface MetaFunction<Data = AppData> {
  (args: {
    data: Data | null;
    parentsData: RouteData;
    params: Params;
    location: Location;
  }): HtmlMetaDescriptor | undefined;
}
