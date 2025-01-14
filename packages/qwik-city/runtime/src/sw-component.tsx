import { jsx } from '@builder.io/qwik';
import swRegister from '@qwik-city-sw-register';

/**
 * @alpha
 */
export const ServiceWorkerRegister = (props: { nonce?: string }) =>
  jsx('script', { dangerouslySetInnerHTML: swRegister, nonce: props.nonce });
