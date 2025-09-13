import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/RTK/store';
import { clearAlert } from '@/RTK/alertSlice';
import { Alert } from '../ui';

export default function AlertRenderer() {
  const alert = useSelector((state: RootState) => state.alert);
  const dispatch = useDispatch();

  if (!alert) return null;

  return <Alert message={alert.message} type={alert.type} onClose={() => dispatch(clearAlert())} />;
}
