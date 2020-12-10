package com.team2.tbcserver.config;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;

import org.springframework.context.annotation.Configuration;

@Configuration
public class CORSFilter implements Filter {

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		System.out.println("CORSFilter, filtering...");

		HttpServletResponse res = (HttpServletResponse) response;
		res.setHeader("Access-Control-Allow-Origin", "*"); // All access
		res.setHeader("Access-Control-Allow-Credential", "true");
		res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, PATCH, OPTIONS");
		res.setHeader("Access-Control-Allow-Max-Age", "3600"); // 접속 유지 시간(초)
		res.setHeader("Access-Control-Allow-Headers",
				"X-PINGOTHER, X-Requested-With, Content-Type, Authorization, Origin, Accept, Access-Control-Request-Method, Access-Control-Request-Headers");
		chain.doFilter(request, response);
		System.out.println("CORSFilter, filtering... END");
	}

	public void init(FilterConfig filterConfig) {
	}

	public void destroy() {
	}

}
