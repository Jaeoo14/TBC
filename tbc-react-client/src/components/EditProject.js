import React from 'react';
import { Tabs, Tab, Badge } from 'react-bootstrap';
import ProjectDescription from './ProjectDescription';
import FundingAndReward from './FundingAndReward';

import './EditProject.css';

const EditProject = () => {
	return (
		<div>
			<h1 id='projectTitle'>
			<Badge variant='secondary'>준비 중</Badge>제목 미정
			</h1>
			<Tabs defaultActiveKey='projectDescription' id='uncontrolled-tab-example'>
				<Tab eventKey='projectDescription' title='프로젝트 개요'>
					<ProjectDescription />
				</Tab>
				<Tab eventKey='FundingAndReward' title='펀딩 및 선물 구성'>
					<FundingAndReward />
				</Tab>
			</Tabs>
		</div>
	);
};

export default EditProject;
