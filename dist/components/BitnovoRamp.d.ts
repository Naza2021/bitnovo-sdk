import { ScreenQueryParams } from '../lib/types';
export type BitnovoRampProps = {
    config: ScreenQueryParams;
} & Omit<React.ComponentProps<'iframe'>, 'src'>;
export declare const BitnovoRamp: React.FC<BitnovoRampProps>;
