import { storiesOf } from '@storybook/react';
import { Box, Grid, Heading } from 'grommet/components';
import React from 'react';
import Icon from '../../components/Icon/GrommetIcon';
import iconNames from './iconNames';
import iconNames from './iconNames';
const v1IconNames = [
  '3d', 'AccessAccessibility', 'AccessAd', 'AccessAssistListening', 'AccessBraille', 'AccessSign', 'AccessTty',
  'AccessVolumeControl', 'AccessWheelchairActive', 'AccessWheelchair', 'Accessible', 'Achievement', 'Action',
  'Actions', 'AddChapter', 'AddCircle', 'Add', 'Aed', 'Aggregate', 'AidOption', 'Aid', 'Alarm', 'Alert', 'Analytics',
  'Announce', 'Apps', 'Archive', 'Article', 'Ascend', 'Atm', 'Attachment', 'Attraction', 'Baby', 'BackTen', 'BarChart',
  'Bar', 'Basket', 'Blog', 'Book', 'Bookmark', 'BottomCorner', 'BrandAppleAppStore', 'BrandCodepenEdit', 'BrandCodepenTry',
  'BrandGooglePlay', 'BrandGrommetOutline', 'BrandGrommetPath', 'BrandHpeElementOutline', 'BrandHpeElementPath',
  'BrandHpeLabsInsigniaOutline', 'BrandHpeLabsInsignia', 'BrandHpeStackCentered', 'BrandHpeStack', 'Briefcase', 'Brush',
  'Bug', 'Bundle', 'Bus', 'BusinessService', 'Cafeteria', 'Calculator', 'Calendar', 'Camera', 'Capacity', 'Car',
  'CaretBack', 'CaretDown', 'CaretNext', 'CaretPrevious', 'CaretUp', 'Cart', 'CatalogOption', 'Catalog', 'Channel',
  'ChapterAdd', 'ChapterNext', 'ChapterPrevious', 'Chat', 'CheckboxSelected', 'Checkbox', 'Checkmark', 'CircleInformation',
  'CirclePlay', 'CircleQuestion', 'ClearOption', 'Clear', 'Cli', 'Clipboard', 'Clock', 'Clone', 'Close', 'ClosedCaption',
  'CloudComputer', 'CloudDownload', 'CloudSoftware', 'CloudUpload', 'Cloud', 'Cluster', 'CoatCheck', 'Code', 'Columns',
  'Compare', 'Compass', 'Compliance', 'Configure', 'Connect', 'ContactInfo', 'Contact', 'Contract', 'Copy', 'CreditCard',
  'Cube', 'Cubes', 'Currency', 'Cursor', 'Cut', 'Cycle', 'Dashboard', 'Database', 'Deliver', 'Deploy', 'Descend', 'Desktop',
  'Detach', 'Diamond', 'Directions', 'Dislike', 'DocumentCloud', 'DocumentConfig', 'DocumentCsv', 'DocumentDownload',
  'DocumentExcel', 'DocumentExe', 'DocumentImage', 'DocumentLocked', 'DocumentMissing', 'DocumentNotes', 'DocumentOutlook',
  'DocumentPdf', 'DocumentPerformance', 'DocumentPpt', 'DocumentRtf', 'DocumentSound', 'DocumentStore', 'DocumentTest',
  'DocumentText', 'DocumentThreat', 'DocumentTime', 'DocumentTransfer', 'DocumentTxt', 'DocumentUpdate', 'DocumentUpload',
  'DocumentUser', 'DocumentVerified', 'DocumentVideo', 'DocumentWindows', 'DocumentWord', 'DocumentZip', 'Document', 'Domain',
  'Down', 'Download', 'Drag', 'DriveCage', 'Duplicate', 'Edit', 'Eject', 'Elevator', 'Emergency', 'EmptyCircle', 'Escalator',
  'Expand', 'Fan', 'FastForward', 'Favorite', 'Filter', 'FingerPrint', 'Flag', 'FolderCycle', 'FolderOpen', 'Folder',
  'FormAdd', 'FormAttachment', 'FormCalendar', 'FormCheckmark', 'FormClock', 'FormClose', 'FormCut', 'FormDown', 'FormEdit',
  'FormFilter', 'FormFolder', 'FormLocation', 'FormLock', 'FormNextLink', 'FormNext', 'FormPreviousLink', 'FormPrevious',
  'FormRefresh', 'FormSchedule', 'FormSearch', 'FormSubtract', 'FormTrash', 'FormUp', 'FormUpload', 'ForwardTen', 'Gallery',
  'Gamepad', 'Gift', 'Globe', 'Grid', 'Group', 'Grow', 'Halt', 'Help', 'History', 'Home', 'HostMaintenance', 'Host', 'IceCream',
  'Image', 'Impact', 'InProgress', 'Inbox', 'Indicator', 'Info', 'Inherit', 'Inspect', 'InstallOption', 'Install', 'Integration',
  'Iteration', 'Java', 'Language', 'Launch', 'Layer', 'License', 'Like', 'LineChart', 'LinkBottom', 'LinkDown', 'LinkNext',
  'LinkPrevious', 'LinkTop', 'LinkUp', 'Link', 'Local', 'LocationPin', 'Location', 'Lock', 'Login', 'Logout', 'Lounge', 'Magic',
  'MailOption', 'Mail', 'Manual', 'MapLocation', 'Map', 'Menu', 'Microphone', 'Money', 'Monitor', 'More', 'Multiple', 'Music',
  'Navigate', 'NewWindow', 'New', 'Next', 'Nodes', 'Note', 'Notes', 'Notification', 'ObjectGroup', 'ObjectUngroup', 'Optimize',
  'Organization', 'Overview', 'Paint', 'Pan', 'PauseFill', 'Pause', 'PersonalComputer', 'PieChart', 'Pin', 'Plan', 'PlatformAmazon',
  'PlatformAndroid', 'PlatformApple', 'PlatformArchlinux', 'PlatformAruba', 'PlatformCentos', 'PlatformChrome', 'PlatformCloudlinux',
  'PlatformDebian', 'PlatformDocker', 'PlatformDos', 'PlatformDropbox', 'PlatformEdge', 'PlatformFedora', 'PlatformFirefox',
  'PlatformFreebsd', 'PlatformGoogle', 'PlatformHadoop', 'PlatformHeroku', 'PlatformHorton', 'PlatformHp', 'PlatformHpi',
  'PlatformInternetExplorer', 'PlatformJava', 'PlatformMandriva', 'PlatformMysql', 'PlatformNorton', 'PlatformOnedrive',
  'PlatformOpera', 'PlatformOracle', 'PlatformPiedPiper', 'PlatformRaspberry', 'PlatformReactjs', 'PlatformRedhat',
  'PlatformSafariOption', 'PlatformSafari', 'PlatformSco', 'PlatformSolaris', 'PlatformSuse', 'PlatformSwift', 'PlatformTurbolinux',
  'PlatformUbuntu', 'PlatformUnixware', 'PlatformVmware', 'PlatformWindowsLegacy', 'PlatformWindows', 'PlayFill', 'Play', 'Power',
  'Previous', 'Print', 'RadialSelected', 'Radial', 'Refresh', 'Resources', 'Restaurant', 'RestroomMen', 'RestroomWomen',
  'Restroom', 'Resume', 'Revert', 'Rewind', 'Risk', 'Robot', 'Rss', 'Run', 'Satellite', 'Save', 'Scan', 'ScheduleNew',
  'SchedulePlay', 'Schedule', 'Schedules', 'Scorecard', 'SearchAdvanced', 'Search', 'Secure', 'Select',
  'Selection', 'Send', 'ServerCluster', 'Server', 'Servers', 'ServicePlay', 'Services', 'SettignsOption', 'SettingsOption',
  'Share', 'ShieldSecurity', 'Shield', 'Shift', 'Shop', 'Sidebar', 'SocialAmazon', 'SocialAmex', 'SocialBitcoin', 'SocialCodepen',
  'SocialCreativeCommons', 'SocialDropbox', 'SocialFacebookOption', 'SocialFacebook', 'SocialGithub', 'SocialGooglePlus',
  'SocialGoogleWallet', 'SocialInstagram', 'SocialLinkedinOption', 'SocialLinkedin', 'SocialMail', 'SocialMastercard', 'SocialMedium',
  'SocialPaypal', 'SocialPinterest', 'SocialProductHunt', 'SocialReddit', 'SocialSkype', 'SocialSlack', 'SocialSnapchat', 'SocialSquare',
  'SocialStackOverflow', 'SocialStripe', 'SocialTumblr', 'SocialTwitter', 'SocialVimeo', 'SocialVine', 'SocialVisa', 'SocialWordpress',
  'SocialYoutube', 'Sort', 'Split', 'Splits', 'Stakeholder', 'Standards3dEffects', 'StandardsConnectivity', 'StandardsCss3',
  'StandardsDevice', 'StandardsFireball', 'StandardsHtml5', 'StandardsMultimedia', 'StandardsOfflineStorage', 'StandardsPerformance',
  'StandardsSematics', 'StarHalf', 'Star', 'StepsOption', 'Steps', 'StopFill', 'Stop', 'Storage', 'StreetView', 'SubtractCircle',
  'Subtract', 'Support', 'Sync', 'System', 'TableAdd', 'Table', 'Tag', 'Target', 'Task', 'Tasks', 'Technology', 'Template', 'Terminal',
  'TestDesktop', 'Test', 'TextWrap', 'Threats', 'Ticket', 'Tip', 'Toast', 'Tools', 'Tooltip', 'TopCorner', 'Transaction', 'Trash',
  'TreeOption', 'Tree', 'Trigger', 'Trophy', 'Troubleshoot', 'Unlink', 'Unlock', 'Up', 'Update', 'Upgrade', 'Upload', 'UserAdd',
  'UserAdmin', 'UserExpert', 'UserFemale', 'UserManager', 'UserNew', 'UserPolice', 'UserSettings', 'UserWorker', 'User', 'Validate',
  'Video', 'View', 'VirtualMachine', 'VmMaintenance', 'VolumeLow', 'VolumeMute', 'Volume', 'Vulnerability', 'Waypoint', 'Workshop',
  'ZoomIn', 'ZoomOut'
];

storiesOf('Grommet 2/Icon', module)
  
  .add('Icons vs V1', () => (
    <Box align="stretch" pad="small">
      <Grid columns={{ count: 4, size: 'auto' }} gap="small">
        {v1IconNames.map((name, index) => (
          <Box align="center" pad="small" key={`${name}-${index}`}>
            {iconNames[name] && (<Icon size="xlarge">{name}</Icon>)}
            <Heading level={4}>{name}</Heading>
          </Box>
        ))}
      </Grid>
    </Box>
  ));
