import { Platform} from 'react-native';
import PdfRNFetchblobDownloadIOS from './PdfRNFetchblobDownloadComponent.ios';
import PdfRNFetchblobDownloadAndroid from './PdfRNFetchblobDownloadComponent.android';



const PdfRNFetchblobDownload = (Platform.OS === 'android')? PdfRNFetchblobDownloadAndroid: PdfRNFetchblobDownloadIOS;


export default PdfRNFetchblobDownload;